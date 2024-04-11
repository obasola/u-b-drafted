interface Template {
    templateName: string
   }
   interface MenuItem {
     menuItemIndex: string;
     menuItemName: string;
     menuItemTitle: string;
   }
   
  export default class MenuItemHelper {
   
   const subMenus:  {
     template: Template;
     menuItems: MenuItem[];
   }
  
  }