export type Service = {
  id: string;
  title: string;
  type: "purchasable" | "orderable";
  price: number;
  prefix?: string;
  suffix?: string;
};