import AddCertificate from "../components/AddCertificate";
import CertificateList from "../components/CertificateList";

function ManageCertificate() {
  return (
    <div className="bg-black min-h-screen text-white p-10">
      <AddCertificate />

      <div className="mt-20">
        <CertificateList manage={true} />
      </div>
    </div>
  );
}

export default ManageCertificate;