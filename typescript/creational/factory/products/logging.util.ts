const eventLogString = (
  functionTye: string,
  product: string,
  message: string
) => {
  return `${functionTye}/${product}: ${message}`;
};

export const logMessage = (message: string) => {
  console.log(message);
};

export const callLogString = ({
  product,
  number,
}: {
  product: string;
  number: string;
}) => {
  return eventLogString("call", product, `Calling: ${number}`);
};

export const messageLogString = ({
  product,
  number,
  message,
}: {
  product: string;
  number: string;
  message: string;
}) => {
  return eventLogString(
    "sendMessage",
    product,
    `Sending message to ${number}: ${message}`
  );
};

export const gameLogString = ({
  product,
  game,
}: {
  product: string;
  game: string;
}) => {
  return eventLogString("playGame", product, `Playing ${game}`);
};

export const videoLogString = ({
  product,
  video,
}: {
  product: string;
  video: string;
}) => {
  return eventLogString("playVideo", product, `Playing video ${video}`);
};
