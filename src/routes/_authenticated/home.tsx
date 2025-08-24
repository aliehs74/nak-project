import { css } from '@emotion/css';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={css({
      backgroundColor: "red",
      marginTop: "10rem"
    })}>
      <h3>Welcome Home!</h3>
    </div >
  );
}
