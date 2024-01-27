import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default function ogHandler(req: NextRequest) {

  const { searchParams } = new URL(req.url);
  const hasTitle = searchParams.has('title');
  const title = hasTitle
    ? searchParams.get('title')?.slice(0, 200)
    : 'Justin George';

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          color: 'white',
          background: 'url(https://images.unsplash.com/photo-1638184984605-af1f05249a56?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3)'
        }}
      >
        <span
          style={{
            fontWeight: 'bold'
          }}
        > {title} </span>
        <span
          style={{
            fontSize: 18,
            position: 'absolute',
            bottom: 0,
            marginBottom: 12,
            letterSpacing: 2,
            background: 'black',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '12px'
          }}
        > typeofjust.in </span>
      </div>
    ),
    {
      width: 1000,
      height: 500,
    },
  );
}
