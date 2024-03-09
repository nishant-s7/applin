import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../helpers/baseUrl";
import { useSelector } from "react-redux";
import { Box, Card, CardBody, Heading, Text } from "@chakra-ui/react";

const Health = () => {
  const [notifications, setNotifications] = useState([]);

  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    axios
      .post(`${BASE_URL}messages/getMessages`, { userId })
      .then((res) => {
        console.log(res.data.messages);
        setNotifications(res.data.messages);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="flex flex-col bg-white rounded-t-xl">
      <h1 className="m-auto p-2 font-bold">NOTIFICATIONS</h1>
      {notifications.length === 0 ? (
        <h2 className="m-auto">No Notifications</h2>
      ) : (
        notifications.map((notification) => (
          <Card key={notification._id} className="m-2">
            <CardBody>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  {notification.type}
                </Heading>
                <Text pt="2" fontSize="sm">
                  {notification.message}
                </Text>
                {notification?.product && (
                  <Text pt="2" fontSize="sm">
                    {notification.product.quantity} litres | Processing :{" "}
                    {notification.product.processing} | Expires on :{" "}
                    {new Date(notification.product.expiresOn).toDateString()}
                  </Text>
                )}
                {notification?.vaccination && (
                  <Text pt="2" fontSize="sm">
                    {notification.vaccination.name} |
                    {new Date(
                      notification.vaccination.administeredDate
                    ).toDateString()}{" "}
                    |
                    {new Date(
                      notification.vaccination.nextDueDate
                    ).toDateString()}
                  </Text>
                )}
                {notification?.breeding && (
                  <Text pt="2" fontSize="sm">
                    {new Date(
                      notification.breeding.inseminationDate
                    ).toDateString()}{" "}
                    |
                    {new Date(
                      notification.breeding.expectedDeliveryDate
                    ).toDateString()}
                  </Text>
                )}
              </Box>
            </CardBody>
          </Card>
        ))
      )}
    </section>
  );
};

export default Health;
