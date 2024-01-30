type Props = {
  label: string;
  value: string;
};

export const InfosLabel: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="flex justify-between">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-sm text-muted-foreground">{value}</p>
    </div>
  );
};
