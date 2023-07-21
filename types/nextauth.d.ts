import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface User {
    access_token?: string;
    refresh_token?: string;
  }

  interface Session extends DefaultSession {
    user?: User;
    accessToken?: string;
    refreshToken?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
  }
}
