type Props = {
  onClick?: () => void;
  backgroundColor: string;
  textColor: string;
};

export default function ColorButton({
  onClick = undefined,
  backgroundColor,
  textColor,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`shadow-lg rounded-lg h-15 cursor-pointer p-5 ${backgroundColor} ${textColor}`}
    >
      テキスト
    </button>
  );
}
