CREATE TABLE IF NOT EXISTS "licenses" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "licenses_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"license_number" text NOT NULL,
	"country" text NOT NULL
);
