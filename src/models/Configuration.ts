export const constraint = {
  senderEmail: {
    MAX_LENGTH: 256,
  },
  username: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 256,
  },
  senderName: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 256,
  },
  smtpHost: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 256,
  },
  password: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 256,
  },
  smtpPort: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 6,
  },
};
