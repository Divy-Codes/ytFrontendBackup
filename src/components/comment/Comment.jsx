import "./_comment.scss";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
export default function Comment() {
  return (
    <section className="commentSection">
      <div className="comment d-flex">
        <img
          src="https://yt3.ggpht.com/NOSx1LAKxaiTIBDjoFRm9xvT7Ytp_KjZTrxyci6QMc-2kpKJeDqqCaDl4KbGqoB-PLH4063mnQ=s88-c-k-c0x00ffffff-no-rj"
          alt="Channel Thumbnail of commentor"
          className="rounded-circle"
        />
        <div className="commentBody">
          <p className="username">
            Albert Einstein{" "}
            <span className="commentTime">{dayjs("2018-08-08").fromNow()}</span>
          </p>
          <p className="commentText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, unde
            architecto vero cupiditate dicta, commodi sapiente mollitia dolores
            exercitationem similique, tempore eveniet dignissimos. Placeat, aut
            consequatur. Recusandae accusantium odio ullam. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Consectetur impedit,
            voluptatem hic similique molestias totam eius! Laboriosam neque
            incidunt distinctio quasi omnis, laudantium odit. Ab saepe ad
            quaerat eum modi!
          </p>
        </div>
      </div>
    </section>
  );
}
