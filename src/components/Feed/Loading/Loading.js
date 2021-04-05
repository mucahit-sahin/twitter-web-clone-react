import "./Loading.css"

export default function Loading() {
    return (
      <div className="loading">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    );
}