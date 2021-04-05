import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle,
  IonLabel,
} from "@ionic/react";

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const menus = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "Detail",
      link: "/detail",
    },
    {
      title: "Login",
      link: "/login",
    },
  ];

  return (
    <IonMenu side="start" contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {menus.map((menu, index) => (
            <IonMenuToggle key={index}>
              <IonItem button routerLink={menu.link}>
                <IonLabel>{menu.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
