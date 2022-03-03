import useToggle from '~/hooks/useToggle';

const Front = () => (
  <p>Front</p>
)

const Back = () => (
  <p>Back</p>
)

export default function Card() {
  const [facing, flip] = useToggle();

  return (
    <div>
      { facing ? <Front /> : <Back />}
      <button onClick={flip}>
        Flip!
      </button>
    </div>
  );
}
