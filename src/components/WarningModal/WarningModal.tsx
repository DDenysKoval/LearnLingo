import ButtonComp from "../ButtonComp/ButtonComp";

interface WarningModalProps {
  onLogin: () => void;
  onRegister: () => void;
}

const WarningModal = ({ onLogin, onRegister }: WarningModalProps) => {
  const handleLogin = () => {
    onLogin();
  };
  const handleRegister = () => {
    onRegister();
  };
  return (
    <div>
      <p className="mb-5 font-medium leading-[1.2] text-[40px] text-center">
        Please login or register to continue
      </p>
      <div className="flex gap-8">
        <ButtonComp
          text="Sign Up"
          type="button"
          width="w-[232px]"
          onClick={handleRegister}
        />
        <ButtonComp
          text="Log In"
          type="button"
          width="w-[232px]"
          onClick={handleLogin}
        />
      </div>
    </div>
  );
};

export default WarningModal;
