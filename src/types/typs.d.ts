type ModalProps = {
  title: string;
  children: React.ReactNode;
};

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
};

type IconProps = {
  className?: string;
};

type MessageListProps = {
  next: () => Promise<unknown>;
  hasMore: boolean;
  messages: MessageProps[];
};

type MessageProps = {
  content: string;
  author: string;
  createdAt: Date;
  createdByCurrentUser?: boolean;
};

type GroupCardProps = {
  name: string;
  description: string;
  area: string;
  members?: User[] | number;
  borderColorIndex: number
};

type User = {
  id: string;
  name: string;
  email: string;
};
