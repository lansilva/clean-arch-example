export const env = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET ?? 'clean-arch',
};
