export type MediaType = {
  id: number;
  type: "image" | "video";
  src: string; 
  alt:string;
  thumbnailSrc?: string; 
 
};