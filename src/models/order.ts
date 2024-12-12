import { z } from "zod";

export const MAX_FILE_SIZE = 4500000;

export const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
];

export const ImageFileDTO =
    // z.custom<File>((v) => v instanceof File)
    z.instanceof(File)
        .refine((file) => {
            if (file && (file.size === 0 || file.name === undefined)) return false;
            else return true;
        }, 'Please update or add new image.')
        .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
            '.jpg, .jpeg, .png and .webp files are accepted.'
        )
        .refine(
            (file) => file.size <= MAX_FILE_SIZE,
            `Max file size is ${MAX_FILE_SIZE / 1000 / 1000}MB.`
        );

export const NewOrderImageDTO = z.object({
    orderId: z.string().transform((value) => {
        const parsed = parseInt(value, 10);
        if (isNaN(parsed) || parsed <= 0) {
            throw new Error('orderId must be a positive number');
        }
        return parsed;
    }),
    orderFileType: z.enum(['passport', 'license_front', 'license_back']),
    orderFile: ImageFileDTO,
});

export const PaginationRequestDTO = z.object({
    pageNumber: z.number(),
    numberOfEntitiesPerPage: z.number(),
});

export type PaginationRequestDTOType = z.infer<typeof PaginationRequestDTO>;

export const GetOrdersRequestDTO = PaginationRequestDTO.extend({
    searchString: z.string().optional(),
    sortColumn: z.string().optional(),
    sortDirection: z.enum(['asc', 'desc']).optional(),
});

export type GetOrdersRequestDTOType = z.infer<typeof GetOrdersRequestDTO>;