import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getRoom } from "../api";

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery([`room`, roomPk], getRoom);
  return <h1>hello</h1>;
}