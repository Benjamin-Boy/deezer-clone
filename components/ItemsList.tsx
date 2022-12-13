import ListItem from "./ListItem";
import ListTitle from "./ListTitle";

import { Props } from "../typings.d";

const ItemsList = ({
  type,
  title,
  subtitle,
  name,
  artistName,
  trackNb,
  fansNb,
  date,
  titlePath,
  itemPath,
  pageScroll,
}: Props) => {
  const array = [1, 2, 3, 4, 5];

  return (
    <div className="w-full p-6">
      <ListTitle
        title={title}
        subtitle={subtitle}
        titlePath={titlePath}
        pageScroll={pageScroll}
      />

      <div className="flex justify-between gap-7">
        {array.map((item) => {
          return (
            <ListItem
              key={item}
              type={type}
              name={name}
              fansNb={fansNb}
              artistName={artistName}
              trackNb={trackNb}
              date={date}
              itemPath={itemPath}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemsList;
