import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Dynamic values from URL
    const title = searchParams.has('title') ? searchParams.get('title')?.slice(0, 100) : 'Chirag Sharma | Full-Stack Gen AI Developer';
    const subtitle = searchParams.has('subtitle') ? searchParams.get('subtitle')?.slice(0, 100) : 'Building intelligent software at the intersection of Web, AI & Automation.';
    const label = searchParams.has('label') ? searchParams.get('label')?.slice(0, 50) : 'PORTFOLIO';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: '#0a0a0a', // Dark theme background
            backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            padding: '80px',
            color: 'white',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Top Label */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.2)', fontSize: 24, fontWeight: 700, letterSpacing: '0.1em', color: '#888' }}>
              {label}
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'white' }}>
              {title}
            </div>
            <div style={{ fontSize: 36, fontWeight: 400, color: '#a1a1aa', maxWidth: '80%' }}>
              {subtitle}
            </div>
          </div>

          {/* Footer branding */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', marginTop: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '30px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontSize: 32, fontWeight: 900 }}>
                CS
              </div>
              <div style={{ fontSize: 32, fontWeight: 700 }}>
                Chirag Sharma.
              </div>
            </div>
            <div style={{ fontSize: 32, fontWeight: 500, color: '#a1a1aa' }}>
              chirag.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
