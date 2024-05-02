
interface MenuItem {
  index: string;
  name: string;
}

interface SubmenuItem extends MenuItem {
  items: MenuItem[];
}
export default class MenuWithTwoDimensionalArray {
    menuItems: SubmenuItem[] = [
      {
        index: '1',
        name: 'Menu 1',
        items: [
          { index: '1-1', name: 'Submenu 1 Item 1' },
          { index: '1-2', name: 'Submenu 1 Item 2' },
          // Add more items as needed
        ],
      },
      {
        index: '2',
        name: 'Menu 2',
        items: [
          { index: '2-1', name: 'Submenu 2 Item 1' },
          { index: '2-2', name: 'Submenu 2 Item 2' },
          // Add more items as needed
        ],
      },
      // Add more submenus as needed
    ];
  
    activeMenu = '1';
  
    selectedMenuItem: MenuItem | null = null;
  
    handleMenuSelect(index: string): void {
      this.activeMenu = index;
      const menuItem = this.findMenuItem(index);
      if (menuItem) {
        this.selectedMenuItem = menuItem;
        // Handle any additional logic related to the selected menu item
      }
    }
  
    findMenuItem(index: string): MenuItem | null {
      for (const submenu of this.menuItems) {
        for (const item of submenu.items) {
          if (item.index === index) {
            return item;
          }
        }
      }
      return null;
    }
  }