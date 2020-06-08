import cv2
import numpy as np
import matplotlib.pyplot as plt

img_original=cv2.imread("led.jpg")
img_gray=cv2.cvtColor(img_original,cv2.COLOR_BGR2GRAY)
#二值化
retv,thresh=cv2.threshold(img_gray,100,255,1)
#尋找
contours,hierarchy=cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)

count=0  
for cont in contours:
    count+=1
print(count)

#畫輪廓
cv2.drawContours(img_original,contours,-1,(0,0,255),3,lineType=cv2.LINE_AA)

cv2.imshow('Contours',img_original)
cv2.waitKey()
cv2.destroyAllWindows()
print(hierarchy)
