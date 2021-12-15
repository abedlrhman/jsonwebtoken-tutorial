import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"


// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => 
	NextAuth(req, res, {
		providers: [
			GithubProvider({
				clientId: process.env.GITHUB_CLIENT_ID,
				clientSecret: process.env.GITHUB_CLIENT_SECRET,
			}),
		],
		debug: process.env.NODE_ENV === "development",
		secret: process.env.AUTH_SECRET,
		jwt: {
			secret: process.env.JWT_SECRET,
		},
})



