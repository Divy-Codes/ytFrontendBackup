import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const styling = {
  display: "grid",
  gridTemplateColumns: "3rem auto",
  gap: "1rem",
  margin: "0.5rem 0",
};

export default function HomePageSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#252525">
      <section style={{ margin: "0.5rem 0 0" }}>
        <div>
          <Skeleton height="11rem" width="100%" borderRadius={10} />
        </div>
        <div style={styling}>
          <div>
            <Skeleton circle height="3rem" width="3rem" />
          </div>
          <div>
            <div>
              <Skeleton height="2rem" width="95%" borderRadius={7} />
            </div>
            <div>
              <Skeleton height="0.75rem" width="50%" borderRadius={3} />
            </div>
          </div>
        </div>
      </section>
    </SkeletonTheme>
  );
}
