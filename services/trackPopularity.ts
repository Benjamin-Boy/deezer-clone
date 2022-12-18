export const trackPopularity = (popularity: number) => {
  [...Array(popularity)].map((_, index) => {
    const div = document.createElement("div");
    div.setAttribute("key", index.toString());
    div.setAttribute("className", "h-[15px] w-[2px] bg-[#fff]");
  });

  [...Array(popularity)].map((_, index) => {
    const div = document.createElement("div");
    div.setAttribute("key", index.toString());
    div.setAttribute("className", "h-[15px] w-[2px] bg-[#a2a2ad]");
  });
};
