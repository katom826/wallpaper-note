import Button from "./Button";

type Props = {
  children: React.ReactNode;
  ref: React.RefObject<HTMLDialogElement | null>;
};

export default function Dialog({ children, ref }: Props) {
  const onClose = () => {
    ref.current?.close();
  };

  return (
    <dialog
      ref={ref}
      className="shadow-lg rounded-lg w-[90%] max-w-[400px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex flex-col gap-5 bg-gray-100 p-5">
        {children}
        <Button onClick={onClose}>閉じる</Button>
      </div>
    </dialog>
  );
}
