import { useNavigate } from "react-router"
import { Button } from "@/shared/ui/Button";
import ArrowLeft from "@assets/ArrowLeftPurpli.svg?react";

interface BackButtonProps {
  className: string
}


export const BackButton = ({ className }: BackButtonProps) => {
  const navigate = useNavigate()

  const goBack = () => {
      navigate(-1)
  }

  return (
    <Button
      variant="whiteBgButton"
      size="L"
      type="button"
      className={className}
      iconLeft={<ArrowLeft />}
      onClick={() => goBack()}
    >
      Назад
    </Button>
  )
}