export default {
	Query: {
		user: (parent, args, ctx) => ctx.prisma.user({ id: args.id }),
		users: (parent, args, ctx) => ctx.prisma.users(),
	},

	Mutation: {
		signUp: async (parent, args, ctx) => {
			const email = args.email.toLowerCase();
			const name = args.name.toLowerCase();
			const user = await ctx.prisma.createUser({
				name,
				email,
			});

			return user;
		},
	},
};
