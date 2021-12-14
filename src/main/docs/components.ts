import { apiKeyAuthSchema } from './schemas/index';
import {
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden,
} from './components/index';

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema,
  },
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden,
};
