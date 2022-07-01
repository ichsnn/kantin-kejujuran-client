import NextAuth from "next-auth/next";
// Custom next auth from restful API
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "john",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "",
        },
      },
      authorize: (credentials) => {
        // database look up
        if (
          credentials.username === "john" &&
          credentials.password === "pass"
        ) {
          return {
            id: 2,
            name: "john",
            email: "john@doe.com",
          };
        }
        return null;
      },
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
