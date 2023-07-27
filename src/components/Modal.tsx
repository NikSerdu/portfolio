"use client";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { FC, PropsWithChildren, ReactNode, useState } from "react";
import { GrClose } from "react-icons/gr";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "99vw",
  height: "95vh",
  padding: 4,
  overflow: "visible",
  bgcolor: "#b835f4",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const BasicModal: FC<PropsWithChildren<{ openBtn: ReactNode }>> = ({
  openBtn,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="">
      <Button onClick={handleOpen}>{openBtn}</Button>
      <Modal
        className=""
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              className="text-red"
            >
              <div className="flex justify-end mb-2">
                <GrClose onClick={(prev) => setOpen(!prev)} />
              </div>
              {children}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default BasicModal;
