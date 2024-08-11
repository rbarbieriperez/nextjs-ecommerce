export type TProducts = {
  productId: number,
  name: string,
  description: string,
  price: number,
  quantity: number,
  currency: string,
  imageUrl: string,
}[];

export type TTagOption = {
  optionLabel: string;
  optionId: string;
  tags?: TTag[]
};

export type TTag = {
  tagId: string;
  tagLabel: string;
}