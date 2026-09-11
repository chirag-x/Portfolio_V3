import { NextResponse } from "next/server";
import { ASTA_SYSTEM_PROMPT } from "@/data/asta";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: "Please send a message for ASTA." }, { status: 400 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY || process.env.DEEPSEEK_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ reply: "ASTA is missing its API key configuration." }, { status: 500 });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://chirag-portfolio.vercel.app", // Adjust in prod
        "X-Title": "ASTA Portfolio AI"
      },
      body: JSON.stringify({
        model: "cohere/north-mini-code:free",
        max_tokens: 300,
        temperature: 0.7,
        messages: [
          { role: "system", content: ASTA_SYSTEM_PROMPT },
          { role: "user", content: message }
        ]
      })
    });

    if (!response.ok) {
      console.error("API error:", await response.text());
      throw new Error(`API error ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || "ASTA is thinking...";

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("ASTA Error:", error);
    return NextResponse.json({ reply: "⚔ ASTA lost connection temporarily. Please try again." }, { status: 500 });
  }
}
