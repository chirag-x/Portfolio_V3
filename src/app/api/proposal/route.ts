import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function POST(req: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "GEMINI_API_KEY is not configured." }, { status: 500 });
    }

    const body = await req.json();
    const { projectType, budget, timeline, details } = body;

    if (!projectType || !details) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const prompt = `
You are an expert tech consultant AI acting on behalf of Chirag Sharma (a Full-Stack Gen AI Developer). 
A potential client just submitted an inquiry for a project. 
Based on the following details, write a highly professional, impressive 3-paragraph initial project proposal. 

Project Type: ${projectType}
Budget: ${budget}
Timeline: ${timeline}
Details: ${details}

The proposal should include:
1. A strong opening acknowledging their specific idea and validating its potential.
2. A high-level technical architecture recommendation (mentioning modern stacks like Next.js, AI APIs, etc. if applicable).
3. Next steps for how Chirag can help them bring this to reality within their timeline/budget.

Do not use overly robotic language. Sound like an elite, visionary software engineer. Format with standard markdown (no bolding for the whole text, just standard formatting). Keep it concise.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    return NextResponse.json({ proposal: response.text });
  } catch (error: any) {
    console.error("Proposal error:", error);
    return NextResponse.json({ error: "Failed to generate proposal: " + error.message }, { status: 500 });
  }
}
