import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const auth = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Twitter Clone",
      credentials: {
        name: { label: "First and lastname", type: "text", placeholder: "John Doe" },
        username: { label: "Username", type: "text", placeholder: "johndoe" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials?.name) {
          return { ...credentials };
        }
        return null;
      },
    }),
  ],
});

export default auth;
