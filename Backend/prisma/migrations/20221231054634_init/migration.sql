-- AlterTable
CREATE SEQUENCE cart_cartid_seq;
ALTER TABLE "cart" ALTER COLUMN "cartId" SET DEFAULT nextval('cart_cartid_seq');
ALTER SEQUENCE cart_cartid_seq OWNED BY "cart"."cartId";
