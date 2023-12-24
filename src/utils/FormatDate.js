export function formatDate(d) {
    const date = new Date(d);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
  
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    };
  
    if (date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()) {
      return 'Today';
    } else if (date.getDate() === yesterday.getDate() &&
               date.getMonth() === yesterday.getMonth() &&
               date.getFullYear() === yesterday.getFullYear()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', options); // Adjust locale as needed
    }
  }
  