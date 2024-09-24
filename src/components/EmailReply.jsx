import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import LockClockIcon from '@mui/icons-material/LockClock';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FaceIcon from '@mui/icons-material/Face';
import ReplyIcon from '@mui/icons-material/Reply';
import '../styles/EmailReply.css'
export default function EmailReply() {
    return (
        <div className='main'>
            <FaceIcon className='faceIcon'/>

            <div className='replyBox'>
                <div className='responseRow'>
                    <ReplyIcon />
                    <p>Freepik Company (no-reply@freepik.com) </p>
                </div>
                <form className='replybox'>
                    <div className='inputArea'>
                        <textarea />
                    </div>
                    <div className='actionRow'>
                        <div className='leftController'>
                        <button className='sendButton'>
                            <h1>Send</h1>
                            </button>
                            <div className='leftActionRow'>
                                <FormatUnderlinedIcon />
                                <AttachFileIcon />
                                <InsertLinkIcon />
                                <InsertEmoticonIcon />
                                <AddToDriveIcon />
                                <ImageIcon />
                                <LockClockIcon />
                                <CreateIcon />
                            </div>    
                        </div>
                        
                        <div className='rightActionRow'>
                            <MoreVertIcon />
                            <DeleteIcon />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}