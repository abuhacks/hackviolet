import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {

    providers: [
        CredentialsProvider({
          name: "creds",

          credentials: {
            email: {label: "Email", placeholder: "Enter Email"},
            password: {label: "Password", placeholder: "Password"}
          },
          async authorize(credentials,req){
            if (!credentials || !credentials.email || !credentials.password)
                return null;

                const user = users.find((item)=> item.email === credentials.email);
                if (user?.password === credentials.password){
                    return user;
                }
                return null;
          }

        })
      ],
      callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
          return true; // If sign-in succeeded
        },
        async redirect({ url, baseUrl }) {
          return  "http://localhost:3000/"; // Modify to the path you want to redirect to.
        },
      },

};
const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};