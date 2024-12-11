"use client";

import { deleteProduct } from "../../utils/api";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: number }) => {
  const router = useRouter();

  const handleDelete = () => {
    deleteProduct(id)
      // silme işlemi başarılı olursa
      .then(() => {
        // sayfayı yeniler (ürünler tekrar alınsın)
        router.refresh();

        // bildirim gönderir
        toast.success("Ürün kaldırıldı!");
      });
  };

  return (
    <button
      onClick={handleDelete}
      className="py-1 px-3 bg-[#f3a5a5] hover:bg-[#f45757] transition rounded-md"
    >
      Sil
    </button>
  );
};

export default DeleteButton;