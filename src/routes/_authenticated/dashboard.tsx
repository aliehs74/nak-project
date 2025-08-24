import { css } from '@emotion/css';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={css({
      backgroundColor: "blue",
      marginTop: "15rem"
    })}>
      <h3>Welcome Home!</h3>
    </div >
  );
}
