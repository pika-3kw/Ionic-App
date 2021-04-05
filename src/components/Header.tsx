import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false} />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
