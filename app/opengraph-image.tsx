import { ImageResponse } from 'next/og';
import { websiteData } from '@/constants/website-data';

export const alt = `${websiteData.personal.name} · ${websiteData.personal.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#fbf6f3',
          color: '#3a2a2e',
        }}
      >
        <div style={{ fontSize: 28, color: '#a8566a', marginBottom: 24 }}>
          Portfolio
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>
          {websiteData.personal.name}
        </div>
        <div style={{ fontSize: 44, color: '#7a6468', marginTop: 20 }}>
          {websiteData.personal.headline}
        </div>
        <div style={{ fontSize: 28, color: '#7a6468', marginTop: 48 }}>
          React · Spring Boot · PostgreSQL
        </div>
      </div>
    ),
    size
  );
}