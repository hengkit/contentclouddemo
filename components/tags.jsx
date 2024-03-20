export const Tags = ({ tags, displayType }) => {
  if (displayType === "article") {
    return (
      <div className="tags inline-flex gap-x-1.5">
        {tags?.length ? (
          <>
            <div className="font-bold">Tags:</div>
            {tags.map((x, i) => (
              <div key={x}>
                <a href={`/tags?q=${encodeURIComponent(x)}`}>{x.toString()}</a>
                {i < tags.length - 1 ? ", " : undefined}
              </div>
            ))}
          </>
        ) : null}
      </div>
    );
  } else {
    return (
      <div className="tags inline-flex gap-x-1.5">
        <p>tags</p>
      </div>
    );
  }
};
