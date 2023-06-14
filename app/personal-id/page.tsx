import Container from "@/components/ui/container";
import { useRouter } from "next/router";

export default function PersonalIdPage() {
  const router = useRouter();
  const decode = router.query; // Retrieve the decode object from query parameters

  return (
    <div>
      <Container className="max-w-screen">
        {/* <CameraComponent onCapture={handleCapture} /> */}
        <>
          {/* <MediaDevices /> */}
          <p>Name: {decode.name}</p>
          <p>Surname: {decode.surname}</p>
          <p>ID: {decode.ID}</p>
          <p>Support: {decode.support}</p>
          <p>Address: {decode.address}</p>
          <p>Birth Certificate: {decode.birthCertificate}</p>
          <p>Issuer: {decode.issuer}</p>
          <p>issueDate: {decode.issueDate}</p>
          <p>Expiration Date: {decode.expirationDate}</p>
          <p>Nationality: {decode.nationality}</p>
          <p>Mother: {decode.mother}</p>
          <p>Father: {decode.father}</p>
        </>
      </Container>
    </div>
  );
}
