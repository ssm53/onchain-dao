import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
    
  );
}

export default RootLayout;
