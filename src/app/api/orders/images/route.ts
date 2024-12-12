
import { NewOrderImageDTO } from '@/models/order';
import defineRoute from '@omer-x/next-openapi-route-handler';
export const { POST } = defineRoute({
  operationId: 'addOrderImage',
  method: 'POST',
  summary: 'Add an order image',
  description: 'Add/replace specified image in the order',
  tags: ['Order images'],
  hasFormData: true,
  requestBody: NewOrderImageDTO,
  action: async ({ }) => {
    return Response.json({ status: 201 });
  },
  responses: {
    201: { description: 'Order image created successfully' },
    400: { description: 'Bad order params' },
    403: { description: 'No access to selected club location' },
  },
});
