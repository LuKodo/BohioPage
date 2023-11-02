import { Link } from "raviger";

export function WhatsappButton() {
  return (
    <Link href="https://wa.me/3217403356?text=Buen%20día,👋%20estoy%20interesado%20en%20un%20inmueble">
      <div className="btn bg-success circle position-fixed end-0 me-4 bottom-0 mb-4 rounded-circle">
        <b className="bi bi-whatsapp fs-2 text-white"></b>
      </div>
    </Link>
  );
}
