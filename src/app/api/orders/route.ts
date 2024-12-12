import { PaginationRequestDTO } from "@/models/order";
import defineRoute from "@omer-x/next-openapi-route-handler";

export const { GET } = defineRoute({
    operationId: 'getOrders',
    method: 'GET',
    summary: 'Get orders',
    description: 'Get list of orders',
    tags: ['Orders'],
    queryParams: PaginationRequestDTO, // doesn't work with GetOrdersRequestDTO as well, but works if you define z.object here inline
    action: async ({ }) => {
        return Response.json({});
    },
    responses: {
        200: {
            description: 'Order details retrieved successfully'
        },
        400: { description: 'Unknown sort column names' },
    },
});
