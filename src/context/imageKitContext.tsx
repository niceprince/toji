// "use client";

// import { IKContext, IKUpload } from "@imagekit/next";

// interface ImageUploadProps {
//   onSuccess: (url: string) => void;
// }

// export default function ImageUpload({ onSuccess }: ImageUploadProps) {
//   return (
//     <IKContext
//       publicKey={process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!}
//       urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!}
//       authenticationEndpoint="/api/imagekit-auth"
//     >
//       <IKUpload
//         fileName="client-image.jpg"
//         folder="/clients"
//         onSuccess={(res) => onSuccess(res.url)}
//         onError={(err) => console.error("Upload error", err)}
//       />
//     </IKContext>
//   );
// }
